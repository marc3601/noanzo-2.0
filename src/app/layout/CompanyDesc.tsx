import React from "react";

const CompanyDesc = () => {
  return (
    <section className="container mx-auto sm:w-4/5 lg:w-11/12 xl:w-4/5 px-4 pt-10 pb-0">

      {/* Heading */}
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight lg:leading-[1.2] mb-6 pb-1 max-w-2xl"
        style={{ color: "#2a1510" }}
      >
        Obsługujemy ponad{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #7a3d2e, #4C2922)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          30 schronisk
        </span>{" "}
        dla zwierząt w Polsce
      </h2>

      <div className="max-w-3xl space-y-4">
        <p className="text-sm sm:text-base leading-relaxed text-[#5a3a30]/80">
          Psy mają siedmiokrotnie lepszy węch od człowieka — dlatego na naszych budach
          nie znajdziesz papy ani gontu bitumicznego. Stosujemy wyłącznie naturalne drewno,
          dobrze zaimpregnowane, dzięki czemu pies nie wyczuwa obcych zapachów i chętnie
          wchodzi do budy. Eliminuje to tak zwany efekt odrzucenia budy przez psa.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#5a3a30]/80">
          Piętnastoletnie doświadczenie i pasja do rzemiosła sprawiają, że każda buda
          powstaje zgodnie z naturą — od podstaw po dach. Drewno to naturalny izolator,
          a my dbamy o to, żeby pozostało nim na lata.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-[#5a3a30]/80">
          Nasze wyroby pokrywamy wyłącznie farbami atestowanymi lub całkowicie bezwonnymi.
          Żadnych lakierów, żadnych rozpuszczalników — bo wiemy, że pies, który gryzie
          elementy budy, po prostu protestuje. Wyjątkiem są oczywiście szczeniaki,
          ale to już zupełnie inna historia. 🙂
        </p>
      </div>

      <div
        className="mt-10 h-px w-full rounded"
        style={{ background: "linear-gradient(90deg, rgba(76,41,34,0.15), transparent)" }}
      />

    </section>
  );
};

export default CompanyDesc;