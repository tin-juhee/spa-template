import { NUMBER_OF_BOXES } from '@/constants/designSystem';

export default {
  title: 'Design System/Spacing',
  parameters: {
    layout: 'centered',
  },
};

const spacings: { size: string; label: string; gap: string }[] = [
  { size: '1', label: 'xs (4px)', gap: '4px' },
  { size: '2', label: 'sm (8px)', gap: '8px' },
  { size: '3', label: 'md (16px)', gap: '16px' },
  { size: '4', label: 'lg (24px)', gap: '24px' },
  { size: '5', label: 'xl (32px)', gap: '32px' },
];

export const SpacingStory = () => (
  <div className='max-w-4xl p-8 mx-auto'>
    <h1 className='text-3xl font-bold mb-8'>Spacing Scale</h1>
    <p className='mb-12 text-gray-700'>
      아래 예시는 디자인 시스템에서 사용하는 간격(Spacing) 단위를 보여줍니다. 각 단위는 레이아웃 구성 시 요소 간의
      일관된 여백을 제공하여 디자인의 통일성을 유지하는 데 도움을 줍니다.
    </p>
    <div className='space-y-12'>
      {spacings.map(({ size, label, gap }) => (
        <div key={size} className='border rounded border-gray-400 p-6 shadow-sm'>
          <h2 className='text-xl font-semibold mb-4'>{label}</h2>
          <div className='flex items-center' style={{ gap }}>
            {[...Array(NUMBER_OF_BOXES)].map((_, i) => (
              <div
                key={i}
                className='w-16 h-16 bg-blue-200 flex items-center justify-center text-sm font-medium text-blue-800 rounded'
              >
                Box
              </div>
            ))}
          </div>
          <p className='mt-4 text-gray-600'>
            이 간격은 {gap} 만큼의 공간을 제공합니다. 레이아웃 구성 시 이 값을 기준으로 요소 간의 여백을 설정하면
            디자인이 일관되고 깔끔해집니다.
          </p>
        </div>
      ))}
    </div>
  </div>
);
