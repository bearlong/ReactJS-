import React, { useState } from 'react';
import MyInputText from '@/components/controlled-form/my-input-text';
import MyTextarea from '@/components/controlled-form/my-textarea';
import MyRadioButtonGroup from '@/components/controlled-form/my-radio-button-group';
import MySelect from '@/components/controlled-form/my-select';
import MyCheckedGroup from '@/components/controlled-form/my-checked-group';
import MyCheckboxGroup from '@/components/controlled-form/my-checkbox-group';

export default function ControlledForm() {
  return (
    <>
      <h1>可控表單元件範例</h1>
      <hr />
      {/* <MyInputText /> */}
      {/* <MyTextarea /> */}
      {/* <MyRadioButtonGroup /> */}
      {/* <MySelect /> */}
      <MyCheckedGroup />
      {/* <MyCheckboxGroup /> */}
    </>
  );
}
