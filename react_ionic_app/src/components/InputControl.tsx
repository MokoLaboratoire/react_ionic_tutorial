import React from "react";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";

const InputControl: React.FC<{
  selectedValue: "mkg" | "ftlbs";
  onSelecValue: (value: "mkg" | "ftlbs") => void;
}> = (props) => {
  const inputChangeHandler = (e: CustomEvent) => {
    props.onSelecValue(e.detail.value);
  };
  return (
    <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="mkg">
        <IonLabel>M/KG</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>FT/LBS</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
