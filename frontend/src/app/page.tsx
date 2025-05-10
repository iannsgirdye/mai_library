import { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import HomePages from "@/components/HomePages"

export const metadata: Metadata = {
  title: "mai_library — библиотека маёвца",
  description: "Сборник файлов и ресурсов, которые обязательно пригодятся студенту Московского авиационного института во время учебной и внеучебной деятельностей.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomePages />
    </>
  );
}
