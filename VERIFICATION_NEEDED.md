# Documentation Verification Checklist

This document lists all factual claims in the documentation that need verification before going live.

## 🔴 CRITICAL - Must Verify Before Publication

### URLs and Endpoints
- [ ] `https://ref.tools/api` - Main API endpoint
- [ ] `https://ref.tools/dashboard` - User dashboard
- [ ] `https://ref.tools` - Main website
- [ ] `https://status.ref.tools` - Status page
- [ ] `https://ref.tools/discord` - Discord invite
- [ ] All GitHub repository URLs under `@ref-tools` organization

### Package Names (Verify these exist and are published)
- [ ] `@ref-tools/mcp-server` (NPM)
- [ ] `ref-tools` (Python PyPI)  
- [ ] `github.com/ref-tools/go-sdk` (Go)
- [ ] `ref-tools` (Rust crates.io)
- [ ] `@ref-tools/js-sdk` (NPM)

### Email Addresses
- [ ] hello@ref.tools
- [ ] sales@ref.tools
- [ ] enterprise@ref.tools
- [ ] security@ref.tools
- [ ] partnerships@ref.tools

### Pricing Information (INCONSISTENCY FOUND)
Current documentation states:
- Basic: $9/month + $9 for 1,000 additional credits
- Pro: $20/month + $20 for 1,000 additional credits

**Question**: Is this correct? Seems expensive for additional credits.

### Credit Costs (Verify these are accurate)
- [ ] Search Documentation: 1 credit
- [ ] Read URL: 1 credit
- [ ] Web Search: 2 credits
- [ ] Chat: 1 credit (mentioned in quickstart only)
- [ ] Web Indexing: 10 credits
- [ ] GitHub/PDF Indexing: 0 credits (free)

## 🟡 IMPORTANT - Verify When Possible

### Rate Limits
- [ ] Free: 100 requests/hour, 10/minute burst
- [ ] Basic: 1,000 requests/hour, 50/minute burst
- [ ] Pro: 5,000 requests/hour, 100/minute burst  
- [ ] Team: 10,000 requests/hour, 200/minute burst

### Technical Claims
- [ ] "Response times under 500ms"
- [ ] Node.js 18+ requirement for MCP server
- [ ] File size limits for PDF processing
- [ ] OCR capability for image-based PDFs
- [ ] Maximum 50 search results per request

### File Paths (Verify these are correct for Claude Desktop)
- [ ] macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- [ ] Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- [ ] Linux: `~/.config/Claude/claude_desktop_config.json`

### Company Information
- [ ] Legal entity name: "Ref Technologies, Inc."
- [ ] Location: "San Francisco, CA, United States"

### Compliance Claims (Only claim if actually achieved)
- [ ] SOC 2 Type II certification
- [ ] GDPR compliance
- [ ] CCPA compliance
- [ ] ISO 27001 (mentioned as "additional compliance")

## 🟢 TEMPLATE EXAMPLES (OK as-is, these are examples)

### MCP Configuration Examples
- Environment variable names like `REF_API_KEY`, `REF_TIMEOUT` etc.
- JSON configuration examples
- Code snippets and curl commands

### Feature Descriptions
- General capability descriptions are based on research
- User workflow examples
- Integration possibilities

## 📝 RECOMMENDATIONS

### Add Disclaimers Where Needed
Consider adding notes like:
- "Contact support to verify current rate limits"
- "Package installation may vary - check latest docs"
- "Response times may vary based on query complexity"

### Create Fallbacks
For any unverified links, have backup plans:
- Use placeholder URLs that redirect to main site
- Provide alternative contact methods
- Include general support information

### Version Information
- Add version numbers to package installation commands
- Include "latest" or specific version requirements
- Date stamp for "current as of" information

## ✅ VERIFIED INFORMATION (From Research)

These items were confirmed through the private documentation search:

### Confirmed Features
- ✅ Semantic documentation search
- ✅ URL reading capability
- ✅ Team workspaces with shared indices
- ✅ MCP server integration
- ✅ Web/GitHub/PDF indexing support
- ✅ Credit-based pricing model

### Confirmed Integrations  
- ✅ Claude Desktop MCP support
- ✅ Cursor integration capabilities
- ✅ REST API availability
- ✅ Multiple client support

### Confirmed Architecture
- ✅ Firebase backend
- ✅ Stripe billing integration
- ✅ Cloud Run indexing jobs
- ✅ Turbopuffer vector storage

## 📋 ACTION ITEMS

1. **Test all URLs** - Click every link to ensure they work
2. **Verify package existence** - Try installing each mentioned package
3. **Confirm pricing** - Check with billing/sales team
4. **Test installation steps** - Follow each installation guide
5. **Review technical claims** - Validate performance and capability statements
6. **Legal review** - Confirm compliance claims are accurate
7. **Update placeholders** - Replace any remaining template content

## 🎯 PRIORITY ORDER

1. **URLs and basic website functionality**
2. **Package names and installation commands**  
3. **Pricing and billing information**
4. **API endpoints and technical specs**
5. **Performance claims and limits**
6. **Compliance and legal statements**

This checklist should be worked through systematically before the documentation goes live to ensure accuracy and avoid user confusion.