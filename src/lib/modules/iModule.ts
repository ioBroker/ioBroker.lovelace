/**
 * Optional interface for modules registered in WebServer._modules.
 * Each method is optional — modules implement only the methods they need.
 * Used as the common type for module iteration in server.ts.
 */
export interface IModule {
    /** Add module-specific service descriptors to the shared services map. */
    augmentServices?(services: Record<string, unknown>): void;
    /** Handle an incoming HA service call (e.g. notify.send_message). Returns true if handled. */
    processServiceCall?(ws: unknown, data: Record<string, unknown>): Promise<boolean> | boolean;
    /** React to an ioBroker state change. */
    onStateChange?(id: string, state: ioBroker.State | null | undefined, wss?: unknown): Promise<unknown> | void;
    /** Handle an incoming WebSocket message. Returns true if handled. */
    processMessage?(ws: unknown, message: Record<string, unknown>): Promise<boolean> | boolean;
    /** React to an ioBroker object change. */
    onObjectChange?(id: string, obj: ioBroker.Object | null | undefined): void;
    /** Release resources (timers, subscriptions). */
    cleanup?(): void | Promise<void>;
    /** One-time initialisation called after all modules are constructed. */
    init?(): Promise<void>;
}
