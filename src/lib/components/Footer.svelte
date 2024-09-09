<script lang="ts">
  import { goto } from '$app/navigation';
  function handleItemClick(path: string) {
      goto(path);
  }
</script>
<footer>
  <div class="container-logo">
    <img src="/images/michel.png" alt="Mascotte Michel" class="logo-michel">
    <span class="hub">House of <br>United Brothers</span>
  </div>
  <div class="container-items">
    <div class="container-footer">
      <p class="title">Contact</p>
      <a href="mailto:bde@mmibordeaux.com" class="footer-item">bde@mmibordeaux.com</a>
      <a href="https://www.instagram.com/bdemmi_montaigne/" class="footer-item">Instragram</a>
      <a href="https://www.helloasso.com/associations/house-of-united-brothers" class="footer-item">HelloAsso</a>
    </div>
    <div class="container-footer">
      <p class="title">Navigation</p>
      <a href="/" class="footer-item">Accueil</a>
      <a href="/programmation" class="footer-item">Programmation</a>
      <a href="/photos" class="footer-item">Photos</a>
      <a href="/guide" class="footer-item">Guide du MMI</a>
      <a href="/avantages" class="footer-item">Vos avantages</a>
    </div>
    <div class="container-footer">
      <p class="title">Autres</p>
      <a href="" class="footer-item">Mentions légales</a>
      <a href="" class="footer-item">Confidentialité</a>
      <a href="" class="footer-item">Contact</a>
    </div>
  </div>
</footer>

<style>
  footer{
    background-color:#9B73AF;
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 64px 7.5vw;
  }
  .container-logo{
    display: flex;
    flex-direction: column;
  }
  .logo-michel{
    width: 120px;
    margin-bottom: 24px;
  }
  .hub{
    font-weight: 800;
    color: var(--violet-secondary);
    text-transform: uppercase;
    font-size: 20px;
  }
  .container-items{
    display: flex;
    justify-content: space-between;
    width: 700px;
  }
  .container-footer{
    display: flex;
    flex-direction: column;
  }
  footer .title{
    font-weight: 600;
    font-size: 20px;
    color: var(--white);
    margin-bottom: 32px;
  }
  .footer-item{
    font-size: 16px;
    color: var(--white);
    margin-bottom: 24px;
    text-decoration: none;
  }

  @media screen and (max-width:425px){
    footer{
      flex-direction: column;
      padding: 45px 7.5vw;
    }
    .container-logo{
      flex-direction: row;
      align-items: end;
      gap: 16px;
    }
    .logo-michel{
      width: 80px;
      margin-bottom: 0px;
    }
    .hub{
      font-size: 20px;
    }
    .container-items{
      margin-top: 50px;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    .container-footer{
      margin-top: 32px;
      margin-bottom: 50px;
    }
    .title, .footer-item{
      text-align: center;
    }
    footer .title{
      font-size: 18px;
    }
    .footer-item{
      font-size: 14px;
    }
  }
</style>
