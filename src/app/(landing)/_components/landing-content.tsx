import { cn } from "@/lib/utils";

interface LandingItemProps {
  direction?: string;
  bgColor?: string;
  color?: string;
}

const LandingItem = ({ direction, bgColor, color = "" }: LandingItemProps) => {
  return (
    <div
      className={cn(
        "h-[840px] py-24 flex px-40 gap-10",
        direction === "reverse" ? "flex-row-reverse" : ""
      )}
    >
      <div className=" w-1/2 flex flex-col items-center justify-center gap-12 px-8">
        <h1 className={cn("text-5xl font-bold", color)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <h2 className="text-xl font-medium text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          placeat error sint asperiores perferendis corporis.
        </h2>
      </div>
      <div className={cn("bg-sky-200 grow", bgColor ? bgColor : "")}></div>
    </div>
  );
};

const Card = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={cn(
        `h-[480px] bg-red-200 flex flex-col items-center py-12 gap-8 px-6 rounded-3xl`,
        className
      )}
    >
      <div className="w-5/6 aspect-video bg-white"></div>
      <h1 className="text-xl font-medium">Lorem Ipsum</h1>
      <h2 className="text-gray-500">Lorem ipsum, dolor sit amet consectetur as adipisicing elit.</h2>
    </div>
  );
};

const LandingContent = () => {
  return (
    <div className="py-12">
      <LandingItem color="text-primary" />
      <LandingItem
        color="text-accent"
        direction="reverse"
        bg-color="bg-green-100"
      />
      <div className="grid grid-cols-12 gap-x-20 gap-y-10 w-3/4 px-20 mx-auto">
        <Card className="col-span-4 bg-green-200" />
        <Card className="col-span-4 bg-sky-200" />
        <Card className="col-span-4 bg-teal-200" />
        <Card className="col-span-4 col-start-3 bg-yellow-200" />
        <Card className="col-span-4 bg-slate-200" />
        <Card className="col-span-10 col-start-2 bg-green-200 h-[720px]" />
      </div>
    </div>
  );
};

export default LandingContent;
