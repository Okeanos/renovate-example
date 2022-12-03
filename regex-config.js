module.exports = {
	"regexManagers": [
		{
			"fileMatch": [
				"^go.mod$"
			],
			"matchStrings": [
				"(?<depName>go\.nikolasgrottendieck\.com\/[\/a-zA-Z0-9\.-]*?) (?<currentValue>[a-zA-Z0-9\.-]+)(.*)\\n"
			],
			"datasource": "go",
			"sourceUrl": "{{{replace 'go.nikolasgrottendieck.com' 'https://okeanos-azure@dev.azure.com/okeanos-azure/renovate%20me/_git/renovate%20me/_git/' sourceUrl}}}",
			"depNameTemplate:": "{{{replace 'go.nikolasgrottendieck.com' 'https://okeanos-azure@dev.azure.com/okeanos-azure/renovate%20me/_git/renovate%20me/_git/' depName}}}"
		}
	]
};
