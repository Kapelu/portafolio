type SkillProps = {
  label: string
  value: number
  className?: string
}

export type SkillItem = Pick<SkillProps, 'label' | 'value'>

export default function Skill({ label, value, className }: SkillProps) {
  return (
    <div className={className}>
      <div className='mb-2 flex justify-between font-semibold text-title'>
        <span>{label}</span>

        <span>{value}%</span>
      </div>

      <div className='h-4 overflow-hidden rounded-full bg-muted'>
        <div
          className='h-full rounded-full bg-secondary transition-all duration-500'
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  )
}
