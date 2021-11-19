import Header from "../../components/header/header"
import BasicCard from "../cards/basic-card";

export default function Home(){
  return (
  <>
    <Header />
      <div class="row">
      <BasicCard title="Física" descricao="Física é uma ciência voltada ao estudo dos fenômenos naturais." />
      <BasicCard title="Química" descricao="Química é a ciência que estuda a composição, estrutura, propriedades da matéria, as mudanças sofridas por ela durante as reações químicas e a sua relação com a energia." />
      </div>
  </>

  );
}