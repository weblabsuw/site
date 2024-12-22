import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { TeamGrid, TeamGridItem } from "@/components/about/team-grid";

export default function AboutPage() {
  return (<>
    <Navbar active="about"/>

    <section className="container max-w-5xl px-8 py-16 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-extrabold">
        About WebLabs
      </h1>

      <p className="mt-4">
        We are a registered student org at <span className="font-medium">University of Wisconsin-Madison</span> dedicated to <span className="italic">building websites together</span>.
      </p>

      <h2 className="mt-16 text-2xl font-bold">
        Supporting tech at UW-Madison
      </h2>

      <h2 className="mt-16 text-2xl font-bold">
        The officers
      </h2>
      <TeamGrid className="mt-4">
        <TeamGridItem
          name="Grace Feng"
          role="Co-President"
          imageSrc={undefined}
          linkedin="https://www.linkedin.com/in/grace-feng-5a4b83271"
        />
        <TeamGridItem
          name="Linkai Wu"
          role="Co-President"
          imageSrc="/images/team/linkai.png"
          linkedin="https://linkedin.com/in/linkaiwu"
          email="mailto:linkai@linkaiwu.com"
          website="https://linkaiwu.com"
        />
        <TeamGridItem
          name="Valerie Lee"
          role="VP of Communications"
          imageSrc={undefined}
        />
        <TeamGridItem
          name="Jackson Daniel"
          role="VP of Logistics"
          imageSrc={undefined}
        />
      </TeamGrid>


      <h2 className="mt-16 text-2xl font-bold">
        Join us
      </h2>
      <p className="mt-4">
        WebLabs is highly community-driven.
        If you like to get involved, you can totally do so as a community member—run your own workshops, propose your own events, and be a positive presence in our community.
      </p>
      <p className="mt-4">
        Officers, however, hold roles that are more involved and essential to the operations of the club.
        They commit to being there when they're needed, but other than that, they're no different than community members.
      </p>
      <p className="mt-4">
        This means the best organizers are usually active community members, so if you're interested, we highly encourage you to be active at our events.
        Keep an eye out for when applications open!
      </p>
    </section>

    <Footer/>
  </>);
}
