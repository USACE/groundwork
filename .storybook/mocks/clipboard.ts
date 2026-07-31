

export class MockClipboard {
    text: string = "";

    writeText(text: string) {
        this.text = text
    }
        
    readText(): string {
        return this.text;
    }
};

