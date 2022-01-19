import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://via.placeholder.com/400x300'
      alt='Meet up'
      title='First Meet up'
      address='adana İstanbul 01169 sk'
      description='deneme1-1-2'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: "https://via.placeholder.com/400x300",
        id: "m1",
        title: "First Meet up",
        address: "adana İstanbul 01169 sk",
        description: "deneme",
      },
    },
  };
}

export default MeetupDetails;
