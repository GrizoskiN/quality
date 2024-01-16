import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FirstSection = () => {
  return (
    <div className="py-16 mt-16 bg-[#0A0B0F] text-white">
      <h1 className="w-[90%] xl:w-2/3 m-auto text-2xl xl:text-5xl mb-16 ">
        Delivering a{" "}
        <span className="text-yellow">premium estimation quality</span> on every
        project we build.
      </h1>

      <Tabs defaultValue="premium" className="w-[90%] xl:w-2/3 m-auto ">
        <TabsList>
          <TabsTrigger value="takeoff">Takeoff Services</TabsTrigger>
          <TabsTrigger value="standard">
            Standard (Engineered)Estimate Service
          </TabsTrigger>
          <TabsTrigger value="premium">
            Premium (Hard) Estimate Service
          </TabsTrigger>
        </TabsList>
        <TabsContent value="takeoff">
          <div className="mt-5  ">
          <p>
            At Quality Estimation, we understand that every project begins with a solid foundation – a foundation built on accurate estimates. Our mission is to empower project managers and contractors with the financial insights they need to make informed decisions. With our expertise, your projects gain a competitive edge from the very start.
            </p>

            <p className="mt-5">
            Estimates serve as the compass guiding your journey through a project's financial landscape. They're not just numbers; they're the keys to unlocking success. Quality Estimation is your compass, revealing the true potential of your projects. Our professional team meticulously analyzes every detail, translating complexity into clarity.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="standard">
          {" "}
          <div className="mt-5  ">
            <p>
            At Quality Estimation, we understand that every project begins with a solid foundation – a foundation built on accurate estimates. Our mission is to empower project managers and contractors with the financial insights they need to make informed decisions. With our expertise, your projects gain a competitive edge from the very start.
            </p>

            <p className="mt-5">
            Estimates serve as the compass guiding your journey through a project's financial landscape. They're not just numbers; they're the keys to unlocking success. Quality Estimation is your compass, revealing the true potential of your projects. Our professional team meticulously analyzes every detail, translating complexity into clarity.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="premium">
          <div className="mt-5  ">
            <p>
            At Quality Estimation, we understand that every project begins with a solid foundation – a foundation built on accurate estimates. Our mission is to empower project managers and contractors with the financial insights they need to make informed decisions. With our expertise, your projects gain a competitive edge from the very start.
            </p>

            <p className="mt-5">
            Estimates serve as the compass guiding your journey through a project's financial landscape. They're not just numbers; they're the keys to unlocking success. Quality Estimation is your compass, revealing the true potential of your projects. Our professional team meticulously analyzes every detail, translating complexity into clarity.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FirstSection;
