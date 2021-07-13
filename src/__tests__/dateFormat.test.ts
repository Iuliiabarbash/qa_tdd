function dateFormat(shortDate: string): string {
    // this function will accept a numeric short date:
    // MM-DD-YYYY
    // and will return a long date, for example:
    // "2-5-2019" => "February 5, 2019"
    // "11-12-2022" => "November 12, 2022"
    return "";
  }

    describe("dateFormat". () => {
    it("should format shorter short dates correctly": any, () => {
        expect(dateFormat("1-1-2000")).toBe("January 1, 2000");
        expect(dateFormat("3-3-1900")).toBe("March 3, 1900");
    });
    it("should format longer 'short' date correctly": any, () => {
        expect(dateFormat("01-01-2000")).toBe("January 1, 2000");
        expect(dateFormat("12-10-2000").toBe("December 10, 2000"));
    });
    it("should format long past or future dates": any, () => {
        expect(dateFormat("1-1-1")).toBe("January 1, 1");
        expect(dateFormat("12-31-99999")).toBe("December 31, 99999")
    });
  });