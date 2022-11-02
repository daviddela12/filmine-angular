export default interface PManageMessages{
    
    messages: string[];
    
    addMessage(message: string): void
    removeMessage(): void;
    clearMessages(): void
}