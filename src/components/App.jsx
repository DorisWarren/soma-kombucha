import React from 'react';
import Header from './Header';
import KombuchaList from './KombuchaList';
import NewKombuchaControl from './NewKombuchaControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKombuchaList: [
         {
          name: 'VIGOR: (Blueberry Ginger Jun)',
          about: 'Gives you the anti-inflammatory and digestive benefits of ginger with whole wild Oregon blueberries. So good.',
          ingredients: 'Ingredients: Organic Green and Black Tea Cold-Brewed in Pure Volcanic Glacier Water, Organic Blueberries, Organic Ginger Juice, Raw Organic Oregon Wildflower Honey (ethically harvested, needed for fermentation), Organic Evap. Cane Juice (needed for fermentation), Live Probiotic Jun and Kombucha Cultures',
          image:'vigor.jpg'
        },
        {
          name: 'EVOLVE:(Oak Cask Kombucha Jun Rii)',
          about: 'The combination of Kombucha, Jun, and Rii, an un-flavored    classic booch for the purist.',
          ingredients: 'Ingredients: Organic Green and Black Tea Cold-Brewed in Pure Volcanic Glacier Water, Raw Organic Oregon Wildflower Honey (ethically harvested, needed for fermentation), Organic Evap. Cane Juice (needed for fermentation), Wild-crafted Shilajit Minerals, Live Probiotic Jun, Kombucha, and Rii™ Cultures',
          image: 'evolve1.jpg'
        },
        {
          name: 'DELIGHT: (Pom-Rose)',
          about: 'The next flavor I want you to try is POMEGRANATE-ROSE kombucha + jun – JUN is another culture like kombucha and lives on green tea and raw honey. This is more light, floral, and feminine than the cherry chai, and contains cardamom and AMLA, which is a wild tree fruit from India that is actually the highest vitamin C food in the world',
          ingredients: 'Ingredients: Organic Green and Black Tea Cold-Brewed in Pure Volcanic Glacier Water, Organic Pomegranate Juice, Raw Organic Oregon Wildflower Honey (ethically harvested, needed for fermentation), Organic Evap. Cane Juice (needed for fermentation), Organic Amla (Wild Indian Gooseberry), Organic Rosewater, Organic Cardamom Seed, Live Probiotic Jun and Kombucha Cultures',
          image:'delight.jpg'
        },
        {
          name: 'BALANCE: (Pear-Fennel Jun)',
          about: 'is JUN - that really rare and special culture that likes green tea and raw honey. Kombucha has been studied a ton and it is actually prescribed in hospitals in Russia for arthritis and cancer, jun is very rare and we do not know much about it. But lots of people tell us it gives them a grounded, content energy, in comparison to the peppy kick of kombucha. Lots of digestion-boosting benefits in the pear fennel.',
          ingredients: 'Ingredients: Organic Green and Black Tea Cold-Brewed in Pure Volcanic Glacier Water, Organic Pear Juice, Organic Fennel, Raw Organic Oregon Wildflower Honey (ethically harvested, needed for fermentation), Organic Evap. Cane Juice (needed for fermentation), Live Probiotic Jun and Kombucha Cultures.',
          image:'balance.jpg'
        },
        {
          name: 'THRIVE: (Lemon Ginger Kombucha)',
          about: 'Is light, crisp, and refreshing with the digestion-boosting, anti-inflammatory kick of ginger.',
          ingredients: 'Ingredients: Organic Black Tea Cold Brewed in Pure Volcanic Glacier Water, Organic Evap. Cane Juice (needed for fermentation), Organic Ginger Juice, Organic Kemon Juice, Organic Cold-Pressed Lemon Essential Oil (Cert. Theraputic Grade), Live Probiotic Kombucha Cultures',
          nutritionalFacts: 'Nutritional facts: Serving size: 8oz, servings per container: about 2, Calories 31, Fat 0, Sodium 8mg ,Total Carbohydrate 11g, Sugars 7g, Protein 0',
          image:'thrive.jpg'
        },
        {
          name: 'RADIATE: (Cherry Chai)',
          about: 'was our first flavor and still one of the most popular. Its all-organic and raw with kombucha, kefired cherry juice, apple cider vinegar, and caffeine free organic chai tea (which is actually an ayurvedic formula to support every system in the body).',
          ingredients: 'Ingredients: Organic Black Tea Cold Brewed in Pure Volcanic Glacier Water, Organic Cherry Juice, Organic Evap. Cane Juice (needed for fermentation), Organic Ginger Juice, Organic Cinnamon, Organic Sweet Green Cardamom, Organic Cloves, Organic Black Pepper, Live Probiotic Kombucha Cultures',
          image:'radiate.jpg'
        },
      ]
    };
    this.handleAddingNewKombuchaToList = this.handleAddingNewKombuchaToList.bind(this);
    }

   handleAddingNewKombuchaToList(newKombucha){
      var newMasterKombuchaList = this.state.masterKombuchaList.slice();
      newMasterKombuchaList.push(newKombucha);
      this.setState({masterKombuchaList: newMasterKombuchaList});
    }

  render(){
    return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' render={()=><KombuchaList kombuchaList={this.state.masterKombuchaList} />} />
      <Route path='/NewKombucha' render={()=><NewKombuchaControl onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />} />
      <Route component={Error404} />
      </Switch>
        <style jsx global>{`
          body {
            margin-top: 100px;
            font-family: sans-serif;
            box-style: border-box;
            background-color: #FFFFFF;
          }
          `}</style>
        </div>
      );
    }
  }


export default App;
