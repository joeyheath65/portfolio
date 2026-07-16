import { useEffect, type RefObject } from "react";

/**
 * Accessible-modal behavior shared by the project and experience dialogs:
 * - Escape closes
 * - background scroll is locked while open
 * - focus moves into the dialog on open and is restored to the trigger on close
 * - Tab is trapped within the dialog
 *
 * Pair with `role="dialog" aria-modal="true"` + `tabIndex={-1}` on the element
 * referenced by `ref`.
 */
export function useModalA11y(
  isOpen: boolean,
  onClose: () => void,
  ref: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!isOpen) return;

    const dialog = ref.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () =>
      dialog
        ? Array.from(
            dialog.querySelectorAll<HTMLElement>(
              "a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex='-1'])"
            )
          ).filter((el) => el.offsetParent !== null)
        : [];

    // Move focus into the dialog (first focusable, else the dialog itself).
    (focusable()[0] ?? dialog)?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && dialog) {
        const items = focusable();
        if (items.length === 0) {
          e.preventDefault();
          dialog.focus();
          return;
        }
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose, ref]);
}
