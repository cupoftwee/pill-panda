require 'opal'

desc "Opal - Build app to build.js"
task :build do
  Opal.append_path "app"
  File.binwrite "build.js", Opal::Builder.build("application").to_s
end