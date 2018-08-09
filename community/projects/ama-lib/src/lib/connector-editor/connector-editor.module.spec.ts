import { ConnectorEditorModule } from './connector-editor.module';

describe('ConnectorEditorModule', () => {
  let connectorEditorModule: ConnectorEditorModule;

  beforeEach(() => {
    connectorEditorModule = new ConnectorEditorModule();
  });

  it('should create an instance', () => {
    expect(connectorEditorModule).toBeTruthy();
  });
});
