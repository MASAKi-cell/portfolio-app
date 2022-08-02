import { BindingScopeEnum, Container } from 'inversify';

class DiUtil {
  private static _container: Container;

  static container(): Container {
    if (this._container === undefined) {
      this._container = new Container({
        autoBindInjectable: true,
        defaultScope: BindingScopeEnum.Singleton,
      });
    }
    return this._container;
  }
}
