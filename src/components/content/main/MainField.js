import React from 'react';
import './MainField.css';

import KatexRender from '../../render/KatexRender';

const stringLatex = 
  `\\begin{pmatrix}\n
      a & b \\\\\n
      c & d\n
      \\end{pmatrix}\n`;
// Obter strings para o renderizado de LaTeX aqui.

const MainField = () => {
  return(
    <article className="main-field">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Ac orci phasellus egestas tellus rutrum tellus. Nibh cras pulvinar mattis nunc. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Sit amet est placerat in. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Lectus arcu bibendum at varius vel. Morbi non arcu risus quis varius. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Vulputate ut pharetra sit amet aliquam id. Hac habitasse platea dictumst quisque sagittis purus sit amet. Faucibus nisl tincidunt eget nullam. Semper viverra nam libero justo laoreet sit amet. Tellus cras adipiscing enim eu. Praesent semper feugiat nibh sed pulvinar. Ultricies integer quis auctor elit sed vulputate mi sit amet.</p>

      <p>Eget aliquet nibh praesent tristique magna sit amet purus. Eget sit amet tellus cras. Urna nunc id cursus metus aliquam. In fermentum posuere urna nec tincidunt praesent semper. Bibendum neque egestas congue quisque egestas diam. Proin sed libero enim sed faucibus turpis in eu mi. Imperdiet dui accumsan sit amet nulla. Ut consequat semper viverra nam libero. Gravida rutrum quisque non tellus orci. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Orci nulla pellentesque dignissim enim sit amet. Arcu felis bibendum ut tristique et. Integer enim neque volutpat ac tincidunt vitae. Diam maecenas sed enim ut sem viverra aliquet eget sit.</p>

      <p>Urna cursus eget nunc scelerisque. Porttitor leo a diam sollicitudin tempor id eu nisl. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Dignissim enim sit amet venenatis urna cursus. Elit ut aliquam purus sit amet luctus venenatis lectus. Enim ut tellus elementum sagittis vitae et. Mauris augue neque gravida in fermentum. Sollicitudin nibh sit amet commodo nulla facilisi. Sodales neque sodales ut etiam sit amet nisl purus in. Id ornare arcu odio ut.</p>
      <br />

      {/* Renderizador de LaTeX funcionando. */}
      <KatexRender string={stringLatex} />
    </article>
  );
};

export default MainField;