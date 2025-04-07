import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TeamGrid, TeamGridItem } from "./team-grid";

export function AboutPage() {
  return (<>
    <Navbar active="about"/>

    <section className="container max-w-5xl px-4 py-16 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-extrabold">
        About WebLabs
      </h1>
      <p className="mt-4">
        We are a registered student org at <span className="font-medium">University of Wisconsin-Madison</span> dedicated to building websites together.
      </p>

      <h2 className="mt-16 text-2xl font-bold">
        Supporting tech at UW-Madison
      </h2>
      <p className="mt-4">
        We're open to all majors and experience levels, and we believe that everyone has something to learn and something to teach.
        We host a variety of events that help us build a community of motivated students interested in computer science, information science, interaction design, and much more.
      </p>

      <h2 className="mt-16 text-2xl font-bold">
        Offering hands-on experiences
      </h2>
      <p className="mt-4">
        Our workshops are designed to be hands-on and interactive.
        We believe that the best way to learn is by doing, so we focus on building real projects and learning by example.
      </p>

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
          imageSrc="/images/team/valerie.jpg"
          linkedin="https://www.linkedin.com/in/valerie-lee-62ba74301"
          email="mailto:velee@wisc.edu"
        />
        <TeamGridItem
          name="Jackson Daniel"
          role="VP of Logistics"
          imageSrc="/images/team/jackson.jpg"
          linkedin="https://www.linkedin.com/in/jackson-daniel"
        />
      </TeamGrid>


      <h2 className="mt-16 text-2xl font-bold">
        Join us
      </h2>
      <p className="mt-4">
        We have no dues, no applications, and no requirements. Just show up to our events!
      </p>
      <p className="mt-4">
        Also, WebLabs is highly community-driven.
        If you like to get involved, you can run your own workshops, propose your own events, and be a positive presence in our community.
      </p>
      <p className="mt-4">
        Officers, however, hold roles that are essential to the operations of the club.
        They commit to being there when they're needed, but other than that, they're no different than community members.
        If you're interested, we highly encourage you to be active at our events.
        Applications open soon!
      </p>
    </section>

    <Footer/>
  </>);
}
