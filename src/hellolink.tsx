import React from "react";
import VoiceActivate20 from "@carbon/icons-react/es/voice-activate/20";
import { navigate } from "@openmrs/esm-framework";
import styles from "./hello-link.scss";
import { HeaderGlobalAction } from "carbon-components-react";

export default function Root() {
  const sayHello = React.useCallback(
    () => navigate({ to: "${openmrsSpaBase}/hello" }),
    []
  );

  return (
    <HeaderGlobalAction
      aria-label="Hello World"
      aria-labelledby="Hello World"
      name="sayHello"
      onClick={sayHello}
      className={styles.slotStyles}
    >
      <VoiceActivate20 />
    </HeaderGlobalAction>
  );
}
