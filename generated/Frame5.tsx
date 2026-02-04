import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Frame5Props {
  className?: string
}

export function Frame5({ className }: Frame5Props) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center gap-[27px] p-[24px] bg-[#333333]",
        className
      )}
    >
      {/* Frame 7 - Header */}
      <div className="flex flex-row justify-center items-center self-stretch gap-[10px] py-[8px] bg-[#9EAA8F]">
        <span 
          className="text-[#FFFFFF] font-bold text-[24px] leading-[1.32]"
          style={{ fontFamily: 'Microsoft YaHei' }}
        >
          测试设计稿
        </span>
      </div>

      {/* Frame 6 - Content */}
      <div className="flex flex-row items-center gap-[71px]">
        {/* Frame 2 - Text Inputs + Primary Button */}
        <div className="flex flex-col items-center gap-[24px] w-[181px]">
          {/* Frame 1 - Text Inputs */}
          <div className="flex flex-col self-stretch gap-[24px]">
            <Input 
              type="text"
              className="h-[24px] bg-[#FFFFFF] border-0"
            />
            <Input 
              type="text"
              className="h-[24px] bg-[#FFFFFF] border-0"
            />
            <Input 
              type="text"
              className="h-[24px] bg-[#FFFFFF] border-0"
            />
            <Input 
              type="text"
              className="h-[24px] bg-[#FFFFFF] border-0"
            />
          </div>
          {/* Primary Button */}
          <Button 
            variant="default"
            size="default"
            className="w-[120px] h-[32px] bg-[#3B82F6] text-[#FFFFFF] text-[12px] font-normal"
            style={{ fontFamily: 'Inter' }}
          >
            Button
          </Button>
        </div>

        {/* Frame 3 - Password Inputs + Destructive Button */}
        <div className="flex flex-col items-center gap-[24px] w-[181px]">
          {/* Frame 1 - Password Inputs */}
          <div className="flex flex-col self-stretch gap-[24px]">
            <Input 
              type="password"
              className="h-[24px] bg-[#EEEEEE] border-0"
            />
            <Input 
              type="password"
              className="h-[24px] bg-[#EEEEEE] border-0"
            />
            <Input 
              type="password"
              className="h-[24px] bg-[#EEEEEE] border-0"
            />
            <Input 
              type="password"
              className="h-[24px] bg-[#EEEEEE] border-0"
            />
          </div>
          {/* Destructive Button */}
          <Button 
            variant="destructive"
            size="default"
            className="w-[120px] h-[32px] bg-[#CF0B0B] text-[#FFFFFF] text-[12px] font-normal"
            style={{ fontFamily: 'Inter' }}
          >
            Button
          </Button>
        </div>

        {/* Frame 4 - Email Inputs + Outline Button */}
        <div className="flex flex-col items-center gap-[24px] w-[181px]">
          {/* Frame 1 - Email Inputs */}
          <div className="flex flex-col self-stretch gap-[24px]">
            <Input 
              type="email"
              className="h-[24px] bg-[#929292] border-0"
            />
            <Input 
              type="email"
              className="h-[24px] bg-[#929292] border-0"
            />
            <Input 
              type="email"
              className="h-[24px] bg-[#929292] border-0"
            />
            <Input 
              type="email"
              className="h-[24px] bg-[#929292] border-0"
            />
          </div>
          {/* Outline Button */}
          <Button 
            variant="outline"
            size="default"
            className="w-[120px] h-[32px] border border-[#3B82F6] text-[#3B82F6] text-[12px] font-normal bg-transparent"
            style={{ fontFamily: 'Inter' }}
          >
            Button
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Frame5
