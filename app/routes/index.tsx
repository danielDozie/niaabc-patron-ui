import { Accountable } from "~/components/pages/home/Accountable";
import { Find } from "~/components/pages/home/Find";
import { Hero } from "~/components/pages/home/Hero";
import { Recognised } from "~/components/pages/home/Recognised";

export default function Index() {
  return (
    <>
    <Hero/>
      <Recognised />
      <Accountable />
    <Find />
    </>
  );
}
