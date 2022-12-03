module.exports = {
	"regexManagers": [
		{
			"fileMatch": [
				"^go.mod$"
			],
			"matchStrings": [
				"go\.nikolasgrottendieck\.com\/(?<packageName>[\/a-zA-Z0-9\.-]+) (?<currentValue>[a-zA-Z0-9\.-]+)(.*)\\n"
			],
			"datasourceTemplate": "go",
			"depNameTemplate:": "https://okeanos-azure@dev.azure.com/okeanos-azure/renovate%20me/_git/renovate%20me/_git/{{{packageName}}}"
		}
	]
};
