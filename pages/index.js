import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 1,
    title: "A First Meetup",
    image: "https://via.placeholder.com/400x300",
    address: "Some Adress, 1234 City",
    description: "This is a second meetup",
  },
  {
    id: 2,
    title: "A Second Meetup",
    image: "https://via.placeholder.com/400x300",
    address: "Some Adress, 12345 City",
    description: "This is a third meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
