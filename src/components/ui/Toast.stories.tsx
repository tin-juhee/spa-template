import { ComponentType } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { useAlertStore } from '@/stores/useToastStore';

import Toast from './Toast';

const meta = {
  title: 'UI/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: '토스트에 표시될 메시지',
      defaultValue: '회원가입이 완료되었습니다!',
    },
    type: {
      control: { type: 'select', options: ['success', 'error', 'warning'] },
      description: '토스트의 타입 (성공/오류/경고)',
      defaultValue: 'success',
    },
    isOpen: {
      control: 'boolean',
      description: '토스트의 표시 여부',
      defaultValue: true,
    },
  },
  args: {
    message: '회원가입이 완료되었습니다!',
    type: 'success',
    isOpen: true,
  },
} satisfies Meta<typeof Toast>;

export default meta;
type TStory = StoryObj<typeof meta>;

const ToastDecorator = (message: string, type: 'success' | 'error' | 'warning') => {
  return (Story: ComponentType) => (
    <div className='flex flex-col items-center gap-4'>
      <button
        onClick={() => useAlertStore.setState({ message, type, isOpen: true })}
        className={`px-4 py-2 text-white rounded bg-primary`}
      >
        Show {type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
      <Story />
    </div>
  );
};

export const SuccessToast: TStory = {
  decorators: [ToastDecorator('회원가입이 완료되었습니다!', 'success')],
};

export const ErrorToast: TStory = {
  decorators: [ToastDecorator('이메일 또는 비밀번호가 틀렸습니다.', 'error')],
};

export const WarningToast: TStory = {
  decorators: [ToastDecorator('비밀번호 보안이 약합니다.', 'warning')],
};
