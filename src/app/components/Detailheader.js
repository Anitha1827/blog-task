export default function Detailheader() {
  return (
    <>
      <nav style={{ backgroundColor: "#332941", height: "250px" }}>
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex flex-col space-x-4 text-white">
                  <h1 style={{ marginTop: "33%" }}>
                    <b style={{ marginLeft: "16px", fontSize: "30px" }}>Blog</b>
                  </h1>
                  <p>
                    Gypsum Unveiled: Navigating Ancient Origins to Architectural
                    Mastery
                  </p>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="relative ml-3">
                <div>
                  <img
                    src="/img1.jpeg"
                    alt="header image"
                    style={{
                      width: "300px",
                      height: "300px",
                      margin: "46% 0  0 22%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
