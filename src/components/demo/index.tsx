import Image from 'next/image';

const Demo = () => (
  <div className="grid grid-cols-1 xl:grid-cols-3 h-[1200px] xl:h-[600px] w-full">
    <div className="grid place-items-center h-full bg-[#6C24B4]">
      <div className="relative w-full h-full">
        <Image src="/assets/images/demo-1.png" alt="demo" layout="fill" objectFit="contain" />
      </div>
    </div>

    <div className="grid place-items-center h-full bg-[#271BAF] p-2 xl:p-10">
      <div className="relative w-full h-full">
        <Image src="/assets/images/demo-2.png" alt="demo" layout="fill" objectFit="contain" />
      </div>
    </div>

    <div className="grid place-items-center h-full bg-[#135CCB] p-2 xl:p-10">
      <div className="relative w-full h-full">
        <Image src="/assets/images/demo-3.png" alt="demo" layout="fill" objectFit="contain" />
      </div>
    </div>
  </div>
);

export default Demo;
