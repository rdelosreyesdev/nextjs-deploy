import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb"; // object id converts strinng to mongo objid

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      id={props.meetupData._id}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://rdelosreyesdev:rptdr007@cluster0.lifeatf.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray(); 
  //^-- fetch all, id field only, to array
  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })), // convert to path params format
  };
}

export async function getStaticProps(context) {
  // fetch data
  const meetupid = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://rdelosreyesdev:rptdr007@cluster0.lifeatf.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupid),
  }); // fetch on by id, convert value to object id for it to be searchable
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      }
    },
  };
}

export default MeetupDetails;
