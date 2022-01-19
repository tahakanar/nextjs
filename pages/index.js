import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://via.placeholder.com/400x300",
    address: "Some Adress, 1234 City",
    description: "This is a second meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://via.placeholder.com/400x300",
    address: "Some Adress, 12345 City",
    description: "This is a third meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) { // if data changes all the time, use setserversideprops
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
