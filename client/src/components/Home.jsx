import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="home-body">
      <section id="button-cont">
        <Link id="button-new" to="/NewEntry">
          New Entry
        </Link>
        <Link id="button-existing" to="/ExistingEntry">
          Existing Entry
        </Link>
      </section>
      <section id="text-cont">
        <h4 className="text-title">Why Journal?</h4>
        <p className="text-body">
          Journaling allows people to clarify their thoughts and feelings,
          thereby gaining valuable self-knowledge. It’s also a good
          problem-solving tool; oftentimes, one can hash out a problem and come
          up with solutions more easily on paper.
          <br /> Journaling about traumatic events helps one process them by
          fully exploring and releasing the emotions involved, and by engaging
          both hemispheres of the brain in the process, allowing the experience
          to become fully integrated within one’s mind.
        </p>
        <h4 className="text-title">So what do I write about?</h4>
        <p className="text-body">
          This is often the first question a budding journal writer might ask
          him or herself. In some ways, though, it’s the most misguided — one
          thing journaling has taught me is that the mind is a surprising place,
          and you often don’t know what it may be hiding until you start
          knocking around in there. Writing in your journal is the only way to
          find out what you should be writing about.
        </p>
        <h4 className="text-title">How often must I write, and when?</h4>
        <p className="text-body">
          Dr. Pennebaker’s research has found that even a one-time
          15-to-30-minute session of focused journal writing can be beneficial.
          In fact, he said he is not “a big fan of journaling every day.”
          <br />
          “One of the interesting problems of writing too much, especially if
          you’re going through a difficult a time, is that writing becomes more
          like rumination and that’s the last thing in the world you need,” he
          said. “My recommendation is to think of expressive writing as a life
          course correction. As opposed to something you have commit to doing
          every day for the rest of your life.”
        </p>
      </section>
    </div>
  );
}
