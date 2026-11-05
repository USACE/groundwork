import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import Modal from "../../components/display/modal";

function checkAcceptance(warningTimeout = 1000 * 60 * 60 * 24 * 30) {
  let hasAccepted = false;
  hasAccepted = window.localStorage.getItem("gw:dod-warn-accept") || false;
  // if we get a value, check to see how long ago it was
  // default timeout is 30 days, but consumers can pass in
  // a different value as a prop
  if (hasAccepted) {
    try {
      const now = new Date();
      const wasAcceptedOn = new Date(hasAccepted);
      if (now - wasAcceptedOn > warningTimeout) {
        window.localStorage.removeItem("gw:dod-warn-accept");
        hasAccepted = false;
      } else {
        hasAccepted = true;
      }
    } catch (e) {
      // just return false on any error
      return false;
    }
  }
  return hasAccepted;
}

function acknowledge() {
  window.localStorage.setItem("gw:dod-warn-accept", new Date().getTime());
}

function DoDWarning({ warningTimeout }) {
  let [isOpen, setIsOpen] = useState(!checkAcceptance(warningTimeout));

  useEffect(() => {
    if (!isOpen) {
      acknowledge();
    }
  }, [isOpen]);

  return (
    <Modal
      opened={isOpen}
      onClose={() => setIsOpen(false)}
      dialogTitle="US Department of Defense Warning Statement"
      dialogDescription={
        <>
          You are accessing a U.S. Government (USG) website that is provided for
          USG-authorized use only. By visiting this website, you consent to the
          following conditions:
        </>
      }
      size="2xl"
      buttons={
        <Button className="gw:w-full" onClick={() => setIsOpen(false)}>
          I Agree
        </Button>
      }
    >
      <ul className="gw:list-disc gw:p-3">
        <li>
          The USG routinely intercepts and monitors communications on this
          website for purposes including, but not limited to, penetration
          testing, COMSEC, monitoring, network operations and defense, personnel
          misconduct (PM), law enforcement (LE), and counterintelligence (CI)
          investigations.
        </li>
        <li>
          At any time, the USG may inspect and seize data stored on this
          website.
        </li>
        <li>
          Communications using, or data stored on, this website are not private,
          are subject to routine monitoring, interception, and search, and may
          be disclosed or used for any USG-authorized purpose.
        </li>
        <li>
          This website includes security measures (e.g., authentication and
          access controls) to protect USG interests — not for your personal
          benefit or privacy.
        </li>
        <li>
          Notwithstanding the above, using this website does not constitute
          consent to PM, LE or CI investigative searching or monitoring of the
          content of privileged communications, or work product, related to
          personal representation or services by attorneys, psychotherapists, or
          clergy, and their assistants. Such communications and work product are
          private and confidential.
        </li>
      </ul>
    </Modal>
  );
}

export default DoDWarning;
