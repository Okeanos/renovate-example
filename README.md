# Go Example Project

Doesn't contain any useful code. Used together with [renovate-example](https://github.com/Okeanos/renovate-example) to
showcase fancy Golang Renovate support (or lack thereof).

A Go module is published with a fake pseudo-name, e.g.

```go.mod
module go.nikolasgrottendieck.com/go-example.git

go 1.19

require ...
```

The address `go.nikolasgrottendieck.com` doesn't actually exist, but is a placeholder that is transparently rewritten
via Git `insteadOf` Syntax:

```shell
git config --global url."https://okeanos-azure@dev.azure.com/okeanos-azure/renovate%20me/_git/".insteadOf "https://go.nikolasgrottendieck.com/"
```

Or within the `.gitconfig`:

```gitconfig
[url "https://okeanos-azure@dev.azure.com/okeanos-azure/renovate%20me/_git/"]
    insteadOf = https://go.nikolasgrottendieck.com/
```

As a consumer it can now be imported as:

```go.mod
module go.nikolasgrottendieck.com/renovate-example

go 1.19

require go.nikolasgrottendieck.com/go-example.git v1.0.2

require (
	golang.org/x/text v0.0.0-20170915032832-14c0d48ead0c // indirect
	rsc.io/quote v1.5.2 // indirect
	rsc.io/sampler v1.3.0 // indirect
)
```

Why is this necessary? Because the original source URL is not compatible[^1] with the Go Mod/Go Get mechanism:

`https://okeanos-azure@dev.azure.com/okeanos-azure/renovate%20me/_git/renovate%20me/` contains a whitespace character
(that has to be converted via URL encoding) and will fail to resolve. Using the `insteadOf` rewrite makes it possible to
consume the module.

Beyond that it may be helpful to set the following Go environment variables:

```shell
go env -w GONOPROXY='*.nikolasgrottendieck.com'
go env -w GONOSUMDB='*.nikolasgrottendieck.com'
go env -w GOPRIVATE='*.nikolasgrottendieck.com'
```

These settings have to be done before Go interacts with the `go.mod` for dependency resolution so that the underlying
Git process can handle the actual rewrite as expected. The same applies for Renovate as a result.

[^1] See: [Module paths and versions](https://go.dev/ref/mod#go-mod-file-ident)
