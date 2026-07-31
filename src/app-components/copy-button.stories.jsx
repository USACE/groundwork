import { MockClipboard } from "../../.storybook/mocks/clipboard";
import { CopyButton } from "./copy-button";
import { expect, waitFor } from "storybook/test";

const meta = {
  component: CopyButton,
};

export default meta;

export const Default = {};

export const CopyData = {
  args: {
    text: "Text to copy",
  },
  play: async ({ mount, userEvent, args }) => {
    userEvent.setup({ writeToClipBoard: true, readFromClipBoard: true });
    const canvas = await mount();

    // we provide a simple mock for the clipboard to avoid
    // dealing with browswer/vitest/etc permissions issues
    const mockClipboard = new MockClipboard();
    Object.defineProperty(navigator, "clipboard", {
      value: mockClipboard,
      configurable: true,
    });

    const copyButton = canvas.getByRole("button", { name: "copy-button" });
    await userEvent.click(copyButton);
    // verify green class was added
    expect(copyButton.classList).toContain("gw-bg-green-600");

    const copiedText = mockClipboard.readText();
    expect(copiedText).toBe(args.text);
    // verify green class is removed.
    waitFor(() =>
      expect(copyButton.classList).not.toContain("gw-bg-green-600"),
    );
  },
};
