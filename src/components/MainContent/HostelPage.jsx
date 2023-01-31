import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import { SectionHeader, SubHeader, Points } from "./MainContent"
import Title from "../Title/Title";

function HostelPage() {
  return (
    <div className="container--main">
      <Title
      lastUpdated={"31/01/2023"}
      >Gsha Meter</Title>
      <ImageContainer
        name={"Kartik Bachhav"}
        manlink={"https://drive.google.com/file/d/1EuISjPSQszv9DGbidvAZOtIeD7X2gFIP/view?usp=sharing"}
        imgsrc={"/karthik.png"}
        por={"General Secretary Hostel Affairs"}
        chartsrc={'/hostel.png'}
        completed={28.5}
        notstarted={40}
        ongoing={31.4}
        unclear={0}
        />
      <Indicator />
      <SectionHeader>
        Eateries & Mess
      </SectionHeader>
      <Points>
        <RP>
          Ensure the installation of <strong>Smoothie, Juice, Fruits</strong> & Protein milkshake shops in SAC region and Hostel 12-13-14 to cater for the demand for healthy food outlets.
        </RP>
        <RP>
          Follow up on completion of the setup of eateries including <strong>Premium Tea Outlet, Pizza chain, Cafe’92</strong> on various prominent locations on campus and a Pure Veg outlet near H14.
        </RP>
        <RP>
          Follow up on setting up a Coffee Shack inside the Central Library Area.
        </RP>
        <WP
          reply={'There are already enough vendors in insti so there is not enough requirement for this'}
        >
          Re-introduce a <strong>Night-Food Truck</strong> in Academic area as an option for meals during nights
        </WP>
        <OP>
          Push for building of <strong>Permanent sheds</strong> for canteens & dhaba to ensure smooth functioning
        </OP>
        <WP
          reply={'Not going to be implemented'}
        >
          Re-introduce the <strong>'Dabba wala system’</strong> for delivery of mess food in the academic area
        </WP>
      </Points>
      <SectionHeader>
        Institute Wide Facilities
      </SectionHeader>
      <Points>
        <OP
          reply={'committee has been established and work is underway'}
        >
          Push for allocation of <strong>Research Park Garden</strong> (behind Hostel 12) to create <strong>playground facility</strong> in addition to the Gymkhana Ground
        </OP>
        <OP
          reply={"Vendor has been contacted, Dean and PHO are looking into it currently"}
        >
          Ensure the installation of <strong>Sanitary Pad, Tampon vending machines</strong> in the SAC area
        </OP>
        <OP
          reply={'The portal has been made and soon be operational'}
        >
          Follow up on the commencement of <strong>Married Research Scholars’ Portal</strong> for smooth and  convenient accommodation allocation process of MRS students
        </OP>
        <RP>
          Push for a <strong>24*7 convenience store</strong> for catering day to day necessities of the residents
        </RP>
        <WP
          reply={'This was meant to be a repair shop, but there is already one at YP Gate.'}
        >
          Re-initiate the tendering process for the setup of an <strong>electronics shop in Hostel 15</strong>
        </WP>
      </Points>
      <SectionHeader>
        Hospital
      </SectionHeader>
      <Points>
        <RP>
          Propose to have a <strong>Hospital orientation</strong> for incoming students and updating of the <strong>Hospital guidebook</strong> with all the recent changes and reforms in policies, timetables etc.
        </RP>
        <WP
          reply={'Not needed anymore as hospital now sells exact number of medicines required instead of whole strips'}
        >
          Re-introduce <strong>Medicine collection boxes</strong> in all the hostels to collect extra medicines.
        </WP>
        <WP
          reply={'Not possible as administration is against setting up a paid clinic'}
        >
          Ensure <strong>Eye check-ups & Health check-up camps</strong> and Eye-Lens drives every semester
        </WP>
        <OP
          reply={'Digitalisation has been started by the hospital but is not complete as of now'}
        >
          Follow up on <strong>Digitalisation of Hospital records</strong> for convenient record maintenance
        </OP>
      </Points>
      <SectionHeader>Hostel Facilities</SectionHeader>
      <Points>
        <OP
          reply={'The policy update right now is that all CCTV footage will be stored for 1 month'}
        >
          Push for a central <strong>comprehensive CCTV policy</strong> for aspects like coverage, storage & access
        </OP>
        <WP>
          Propose to introduce a <strong>One-stop complaint section in InstiApp</strong> to cater to all the complaints
        </WP>
        <WP
          reply={'There are too many network providers and it cannot be done for all of them'}
        >
          Push for the installation of Network Boosters in hostels with network connectivity problems
        </WP>
        <OP>
          Follow up on the completion of <strong>PHO Digitalization</strong> for effective scheduled room cleaning, stock maintenance & inclusion of a <strong>feedback system</strong> for better efficiency work & quality
        </OP>
        <WP>
          Follow up on the opening up of a <strong>Bicycle repair shop</strong> near Hostel 12-13-14
        </WP>
      </Points>
      <SectionHeader>
        Transportation
      </SectionHeader>
      <Points>
        <OP>
          Push for introducing <strong>Electric Bikes</strong> in the institute as a convenient mode of transport
        </OP>
        <RP>
          Re-introduce <strong>E-shuttle services</strong> while incorporating new features like timetables, improved frequencies & routes, NFC cards and a specified <strong>shuttle for specially-abled students</strong>.
        </RP>
        <WP
          reply={'There is enough transport facility available'}
        >
          Re-introduction of Outsourced Bus service as an option for day-to-day hostel commutation
        </WP>
      </Points>
      <SectionHeader>
        Inclusivity & Security Policies
      </SectionHeader>
      <Points>
        <WP
          reply={'Administrations will not permit in present circumstances'}
        >
          Push for a <strong>time extension of opposite gender Entry-Exit</strong> in all the hostels
        </WP>
        <RP>
          Push for the inclusion of <strong>Female team members</strong> in all the security departments
        </RP>
        <OP>
          Introduce a <strong>Security guidebook</strong> for guards and revamp of <strong>Security website</strong> with updated contact lists, code of conduct and follow up on a well maintained <strong>lost and found portal</strong>
        </OP>
        <OP
          reply={'This has already started in the form of scanning ID cards in the mess, will continue to introduce scanning in other places also like male female entry'}
        >
          Propose the <strong>Digitization of Student and Alumni ID-Card</strong> for better convenience
        </OP>
        <RP>
          Push for mandatory <strong>PoSH training sessions</strong> for selected members in all Institute Councils to ensure and increase accountability, supportive work environment and gender sensitivity.
        </RP>
        <OP
          reply={'Portal made, will become functional as soon as possible'}
        >
          Follow up on <strong>Digital guest entry system</strong> for convenient entry-exit and record maintenance
        </OP>
      </Points>
      <SectionHeader>
        Accountability, Reforms and no Others
      </SectionHeader>
      <Points>
        <WP
        reply = {"Blog and video reports not going to happen"}
        >
          In order to ensure transparency and accountability of the Hostel Affairs Council, propose to reinitiate <strong>Hostel Affairs Blog</strong>, release monthly <strong>Video Work Reports</strong> and <strong>HGSC minutes</strong>
        </WP>
        <WP
          reply={'Will be implemented end of tenure'}
        >
          Inclusion of <strong>Cycle Donation/Takeaway option</strong> on hostel no-dues form to counter the scrap  problem faced by the hostels as well as to donate the cycles to the respective hostels
        </WP>
        <RP>
          Follow up on the formation of <strong>'Ease of Access Cell'</strong> to ensure better campus experience of  specially-abled students
        </RP>
        <OP
          reply={'Under GSAA now, convener has been appointed'}
        >
          Follow up on the formation of <strong>‘Student Grievance Cell’</strong> to ensure the better addressal of  student issues
        </OP>
      </Points>
      <SectionHeader>
        Sustainability
      </SectionHeader>
      <Points>
        <WP
        reply={"Will not happen"}
        >
          Propose a <strong>Pan-IIT Sustainability</strong> body to aid in collaborative effort and exchange of ideas
        </WP>
        <RP>
          Increase the frequency of <strong>Zero-wastage days</strong> in all Institute Messes to reduce food wastage
        </RP>
        <WP>
          Revamp the NGO feed program as a social activity
        </WP>
        <OP>
          Ensure the completion of <strong>Waste segregation project</strong> to aid in the sustainable waste disposal
        </OP>
        <RP>
          Follow up on the formation of the <strong>Umbrella Committee</strong> to ensure better oversight over sustainable development projects in the institute
        </RP>
      </Points>
      <SectionHeader>
        Horticulture & Landscape
      </SectionHeader>
      <Points>
        <OP
          reply={'Committee has been made to finalise location and content of maps'}
        >
          Ensure Installation of <strong>Signboards and Institute maps</strong> at prominent locations on the campus
        </OP>
        <WP reply={"Will not happen"}>
          Push for the introduction of <strong>Aesthetic infrastructure</strong> and growth by proposing initiatives such as Installation of <strong>Benches with sheds</strong> on roadsides, development of <strong>Vertical gardens</strong>.
        </WP>
        <WP reply={"Will not happen"}>
          Follow up on <strong>Horticulture privatization</strong> to ensure better Landscape development and an  increase in accountability and efficiency of gardeners associated with maintaining the same.
        </WP>
      </Points>

    </div>
  )
}

export default HostelPage