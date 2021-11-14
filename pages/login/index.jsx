export default function LoginPage() {
  return (
    <div className="page">
      <div className="container">
        <h1>login</h1>
        <div className="form-wrap">
          <form className="form">
          <div className="form-title">Вход</div>

            <div className="form-items">
              <div className="form-item">
                <input type="text" placeholder="Логин" />
              </div>
              <div className="form-item">
                <input type="password" placeholder="Пароль" />
              </div>
              <div className="form-item">
                <button type="submit">Войти</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
