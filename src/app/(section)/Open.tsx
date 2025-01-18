import Image from "next/image";
import React from "react";

const Open: React.FC = () => {
  return (
    <section className="h-full w-full">
      <div>
        <Image
          src={"/images/open/open.png"}
          width={1920}
          height={1063}
          alt="open"
          className="h-full w-full object-cover lg:h-[80vh]"
        />
      </div>
    </section>
  );
};

export default Open;
