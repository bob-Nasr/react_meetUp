import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-bebbf-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
      .catch((error) => {
        console.error("Error fetching meetups:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <h1>All Meetups Page</h1>
      {isLoading && <p>Loading...</p>}

      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
