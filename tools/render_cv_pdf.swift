import AppKit
import Foundation
import WebKit

final class Renderer: NSObject, WKNavigationDelegate {
    private let webView: WKWebView
    private let outputURL: URL

    init(inputURL: URL, outputURL: URL) {
        self.outputURL = outputURL
        let configuration = WKWebViewConfiguration()
        self.webView = WKWebView(frame: NSRect(x: 0, y: 0, width: 595, height: 842), configuration: configuration)
        super.init()
        self.webView.navigationDelegate = self
        self.webView.loadFileURL(inputURL, allowingReadAccessTo: inputURL.deletingLastPathComponent())
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            let printInfo = NSPrintInfo()
            printInfo.paperSize = NSSize(width: 595.28, height: 841.89)
            printInfo.topMargin = 28
            printInfo.bottomMargin = 28
            printInfo.leftMargin = 28
            printInfo.rightMargin = 28
            printInfo.horizontalPagination = .fit
            printInfo.verticalPagination = .automatic
            printInfo.isHorizontallyCentered = false
            printInfo.isVerticallyCentered = false
            printInfo.jobDisposition = .save
            printInfo.dictionary()[NSPrintInfo.AttributeKey.jobSavingURL] = self.outputURL

            let operation = webView.printOperation(with: printInfo)
            operation.showsPrintPanel = false
            operation.showsProgressPanel = false

            if operation.run() {
                NSApp.terminate(nil)
            } else {
                fputs("PDF rendering failed\n", stderr)
                exit(1)
            }
        }
    }

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        fputs("Navigation failed: \(error.localizedDescription)\n", stderr)
        exit(1)
    }

    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        fputs("Navigation failed: \(error.localizedDescription)\n", stderr)
        exit(1)
    }
}

guard CommandLine.arguments.count == 3 else {
    fputs("Usage: swift render_cv_pdf.swift input.html output.pdf\n", stderr)
    exit(64)
}

let inputURL = URL(fileURLWithPath: CommandLine.arguments[1]).standardizedFileURL
let outputURL = URL(fileURLWithPath: CommandLine.arguments[2]).standardizedFileURL

let app = NSApplication.shared
app.setActivationPolicy(.prohibited)
let renderer = Renderer(inputURL: inputURL, outputURL: outputURL)
withExtendedLifetime(renderer) {
    app.run()
}
