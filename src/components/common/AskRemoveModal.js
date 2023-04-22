import React from 'react';
import AskModal from './AskModal';

const AskRemoveModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      onConfirm={onConfirm}
      onCancel={onCancel}
      title={'포스트 삭제'}
      description={'포스트를 정말 삭제하시겠습니까?'}
      confirmText="삭제"
    />
  );
};

export default AskRemoveModal;
