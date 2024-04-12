


export interface Ill {
    addShowCode: (el: HTMLElement) => void;
    elementIsVisible: (el: HTMLElement) => boolean;
    ensureElementInView: (el: HTMLElement) => void;
    unselectAllRecords: () => void;
    toggleRecord: (element: HTMLElement, event: Event) => void;
    selectRecord: (element: HTMLElement, event: Event) => void;
    showCode: (element: HTMLElement, event: Event) => void;
    closeAllCode: () => void;
    toggleAnnotate: (el: HTMLElement) => void;
    cancel: (event?: Event) => void;
    addToggleAnnotations: (record: HTMLElement) => void;
    injectLabels: () => void;
    printMode: () => void;
    onload:() => void;
    onkeyup:(element: Event) => void;
  }