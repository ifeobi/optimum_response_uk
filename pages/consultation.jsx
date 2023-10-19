import DynamicPages from "@/components/DynamicPages";
import HeadTags from "@/components/HeadTags";
import { support_we_offer } from "@/constants";

const consultation = () => {
  const placement = support_we_offer[2];
  const title = placement.title;
  const desc = placement.desc;
  const services1 = placement.services1;
  const services3 = placement.services3;
  const subtitle0 = placement.subtitle0;
  const subtitle1 = placement.subtitle1;
  const subtitle3 = placement.subtitle3;

  return (
    <>
      <HeadTags title="Consultation | Optimum Response Care" desc={desc} />

      <DynamicPages
        title={title}
        desc={desc}
        services1={services1}
        services2={[]}
        services3={services3}
        subtitle0={subtitle0}
        subtitle1={subtitle1}
        subtitle3={subtitle3}
      />
    </>
  );
};

export default consultation;
