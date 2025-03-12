export default {
  title: 'Design System/Typography',
  parameters: {
    layout: 'centered',
  },
};

const sizes = [
  { size: 'text-xs', label: 'Extra Small (text-xs)' },
  { size: 'text-sm', label: 'Small (text-sm)' },
  { size: 'text-base', label: 'Base (text-base)' },
  { size: 'text-lg', label: 'Large (text-lg)' },
  { size: 'text-xl', label: 'Extra Large (text-xl)' },
  { size: 'text-2xl', label: '2XL (text-2xl)' },
  { size: 'text-3xl', label: '3XL (text-3xl)' },
  { size: 'text-4xl', label: '4XL (text-4xl)' },
  { size: 'text-5xl', label: '5XL (text-5xl)' },
  { size: 'text-6xl', label: '6XL (text-6xl)' },
];

const weights = [
  { weight: 'font-thin', label: 'Thin (font-thin)' },
  { weight: 'font-extralight', label: 'Extra Light (font-extralight)' },
  { weight: 'font-light', label: 'Light (font-light)' },
  { weight: 'font-normal', label: 'Normal (font-normal)' },
  { weight: 'font-medium', label: 'Medium (font-medium)' },
  { weight: 'font-semibold', label: 'Semi Bold (font-semibold)' },
  { weight: 'font-bold', label: 'Bold (font-bold)' },
  { weight: 'font-extrabold', label: 'Extra Bold (font-extrabold)' },
  { weight: 'font-black', label: 'Black (font-black)' },
];

export const TypographyStory = () => (
  <div className='max-w-3xl p-8 mx-auto space-y-12'>
    <h1 className='text-4xl font-bold text-center mb-4'>Typography</h1>

    <section>
      <h2 className='text-2xl font-semibold border-b pb-2 mb-4'>Font Sizes</h2>
      <div className='space-y-4'>
        {sizes.map(({ size, label }) => (
          <div key={size} className='space-y-1'>
            <div className={`${size} font-medium`}>{label}: The quick brown fox jumps over the lazy dog.</div>
            <div className='text-gray-500 text-sm'>
              <code>{size}</code>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className='text-2xl font-semibold border-b pb-2 mb-4'>Font Weights</h2>
      <div className='space-y-4'>
        {weights.map(({ weight, label }) => (
          <div key={weight} className='space-y-1'>
            <div className={`${weight} text-lg`}>{label}: The quick brown fox jumps over the lazy dog.</div>
            <div className='text-gray-500 text-sm'>
              <code>{weight}</code>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);
