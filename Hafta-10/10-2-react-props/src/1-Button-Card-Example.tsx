import Button from "./Button";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <Button variant="primary">Merhaba Primary</Button>
      <Button variant="danger">Merhaba Danger</Button>
      <Button variant="default">Merhaba Default</Button>

      <Card>
        <span>😸</span>
        <span>Kedileriniz için dev hizmett</span>
      </Card>
    </div>
  );
};

export default App;
