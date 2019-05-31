import Card from './Card'
import RuleHeading from './RuleHeading'

export default () => (
  <Card name='MØTEREGLER'>
    <p>
      <RuleHeading text='1. Tydelig mål' />
      Formålet med møtet må være klart for alle deltakerne.<br />
      Hva vil en oppnå med dette møtet?<br />
      Hva ønsker du skal skje når møtet er over?
    </p>
    <p>
      <RuleHeading text='2. Møtet må ha en agenda.' />
        Angendaen beskriver "hva", "hvem", "hvordan", og "når".
    </p>
    <p>
      <RuleHeading text='3. Start med stillhet' />
      Les møteagendaen, stille, hver for dere i starten av møtet.<br />
      Dette sørger for at alle er forbredt og opplyst om hva møtet handler om.
    </p>
    <p>
      <RuleHeading text='4. "Two pizza" teams.' />
      Målet med "two pizza" teams er å øke produktiviteten.
    </p>
  </Card>
)
