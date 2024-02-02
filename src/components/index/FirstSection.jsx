import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FirstSection = () => {
  return (
    <div className="py-16 lg:mt-6 bg-[#0A0B0F] text-white">
      <div className="w-[90%] xl:w-2/3 m-auto mb-16">
      <h1 className=" text-2xl xl:text-5xl mb-6 ">
        Delivering a{" "}
        <span className="text-yellow">premium estimation quality</span> on every
        project we build.
      </h1>
      <p className="text-slate-300">By offering these services, our independent estimating firm ensures that clients receive accurate, competitive, and well-documented estimates, allowing them to make informed decisions and secure successful bids in the construction industry.</p>
      </div>
      <Tabs defaultValue="premium" className="w-[90%] xl:w-2/3 m-auto ">
        <TabsList>
          <TabsTrigger value="takeoff">Comprehensive Takeoff Services</TabsTrigger>
          <TabsTrigger value="standard">
          Engineered (Soft) Estimate
          </TabsTrigger>
          <TabsTrigger value="premium" className="">
          Hard Bid Estimates with Subcontractor Pricing
          </TabsTrigger>
        </TabsList>
        <TabsContent value="takeoff">
          <div className="  ">
          <p>
          <span className="uppercase font-bold text-gray-300 ">If you know your prices but need the quantities!</span> <br/> <br/>
          <span className=" text-yellow ">Blueprint Analysis and Quantification →</span> Our experienced team performs a meticulous analysis of project drawings and specifications, identifying all shown components and materials required for the execution of the work. We then conduct precise quantification, measuring lengths, areas, and volumes to ensure accurate estimates.
            </p>

            <p className="mt-5">
            <span className=" text-yellow ">Digital Takeoff Tools →</span> Utilizing advanced digital takeoff tools and software, along with the experienced staff, we streamline the surveying process, providing a detailed organization of quantities directly from drawings, enhancing efficiency and precision.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="standard">
          {" "}
          <div className=" ">
            <p>
          <span className="uppercase font-bold text-gray-300 ">If you need a solid reference when submitting bids!</span> <br/> <br/>
          <span className=" text-yellow ">Database-Driven Cost Estimates →</span> Our firm utilizes industry-standard databases updated quarterly to access comprehensive and up-to-date cost data. This includes detailed information on material costs, labor rates, and equipment expenses tailored to specific regions and project types.
            </p>

            <p className="mt-5">
            <span className=" text-yellow ">Customized Cost Assemblies →</span> We employ pre-built cost assemblies from these databases, expediting the estimating process. Our team customizes these estimates to align with project-specific factors, ensuring accuracy and relevance to the unique aspects of each construction project.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="premium">
          <div className=" ">
          <p>
          <span className="uppercase font-bold text-gray-300 ">If you need a complete solution for your bidding needs!</span> <br/> <br/>
          <span className=" text-yellow ">Subcontractor Bidding →</span> Our firm collaborates closely with your subcontractors, or finds new ones and qualifies them. We manage the bid processes, and obtain pricing for the required subcontractors. We ensure clear communication to clarify project requirements, resulting in comprehensive bids from subcontractors.
            </p>

            <p className="mt-5">
            <span className=" text-yellow ">Bid Analysis and Compilation →</span> Evaluating subcontractor bids for competitiveness, experience, and compliance, we integrate subcontractor pricing seamlessly with in-house estimates. Our clients receive a final, detailed hard bid estimate that encompasses all project costs, providing a competitive edge in the bidding process.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FirstSection;
