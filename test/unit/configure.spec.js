import { configure } from "../../src/index";
import { MdlConfig } from "../../src/config";

class ConfigStub {
    globalResources(...resources) {
        this.resources = resources;
    }

    aurelia = {
        resources: {
            registerViewEngineHooks: () => null,
        },
    };

    container = {
        get: (key) => {
            return new MdlConfig();
        },
    };
}

describe("the Aurelia configuration", () => {
    var mockedConfiguration;

    beforeEach(() => {
        mockedConfiguration = new ConfigStub();
        configure(mockedConfiguration);
    });

    it("should register a global resource", () => {
        expect(mockedConfiguration.resources).toContain("./mdl");
    });
});
